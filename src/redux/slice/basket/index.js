import { createSlice } from '@reduxjs/toolkit';

const productlist = [
  {
    id: 1,
    name: 'Ürün 1',
    price: 100,
    category: 'Piyanolar',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 2,
    name: 'Ürün 2',
    price: 200,
    category: 'Tuşlular',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 3,
    name: 'Ürün 3',
    price: 300,
    category: 'Gitarlar',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 4,
    name: 'Ürün 4',
    price: 400,
    category: 'Yaylılar',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 5,
    name: 'Ürün 5',
    price: 400,
    category: 'Nefesliler',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 6,
    name: 'Ürün 6',
    price: 400,
    category: 'Davul',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
  {
    id: 7,
    name: 'Ürün 7',
    price: 400,
    category: 'Aksesuar',
    image: 'https://via.placeholder.com/150',
    favorited: false,
  },
];

let product, item;
//bu if yapısının amacı next.js server side bir framework olmasından kaynaklı ve localstorage ise
//client tarafında olan birşey olmasından dolayı client tarafından localstorage e erişip alıyoruz bilgileri
//window client side'a aittir.
if (typeof window !== 'undefined') {
  product = JSON.parse(localStorage.getItem('products'));
  item = JSON.parse(localStorage.getItem('basket'));
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: product || productlist,
    items: item || [],
  },
  reducers: {
    addToBasket: (state, action) => {
      //state.items değiştirilemez bir obje olduğundan bir clone unu oluşturuyoruz
      let clone = [...state.items];
      //gelen öğenin index değerini alıyoruz
      const findex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findex != -1) {
        //gelen öğenin index değeri bulunuyorsa daha doğrusu gelen öğe varsa total değerini 1 arttırıyoruz ki
        //tekrar tekrar aynı üründen eklemeyelim
        clone[findex].total = clone[findex].total + 1;
        //son olarak da state i clone a eşitliyoruz
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(clone));
        }
        state.items = clone;
      } else {
        //gelen öğe state de bulunmuyorsa pushlayıp state e eşitliyoruz
        clone.push({ ...action.payload, total: 1 });
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(clone));
        }
        state.items = clone;
      }
    },
    removeFromBasket: (state, action) => {
      let clone = [...state.items];
      const findex = clone.findIndex((item) => item.id == action.id);
      clone.splice(findex, 1);
      state.items = clone;
      if (typeof window !== 'undefined') {
        localStorage.setItem('basket', JSON.stringify(clone));
      }
    },
    handleFavorites: (state, action) => {
      let clone = [...state.products];
      const findex = clone.findIndex((item) => item.id == action.payload);
      //gelen öğenin index değerini bulup favorited in tam tersi değerini veriyoruz true ise false false ise true
      clone[findex].favorited = !clone[findex].favorited;
      //son olarak da clone u localstorage a atıp state i clone a eşitliyoruz
      if (typeof window !== 'undefined') {
        localStorage.setItem('products', JSON.stringify(clone));
      }
      state.products = clone;
    },
    handleBasketTotal: (state, action) => {
      let clone = [...state.items];
      const findex = clone.findIndex((item) => item.id == action.payload.id);
      if (action.payload.type == 'UP') {
        // action.payload {id,type} olarak geliyor bizde bu bilgileri kullanarak koşullandırma yapıyoruz
        clone[findex].total = clone[findex].total + 1;
        //koşullandırma up ise total i 1 arttırıyor
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(clone));
        }
        state.items = clone;
      } else {
        // Koşullandırma up değilse 1 azaltıyoruz ama bilgi eski olduğu için 1 fazlası kalıyor bu yüzden 1 e eşit veya
        // küçük ise ürünü tamamen siliyoruz
        if (clone[findex].total <= 1) {
          clone.splice(findex, 1);
          state.items = clone;
          if (typeof window !== 'undefined') {
            item = localStorage.setItem('basket', JSON.stringify(clone));
          }
        } else {
          // eğer ürün 1 e eşit veya 1 den küçük değilse de total değerini 1 düşürüyoruz.
          clone[findex].total = clone[findex].total - 1;
          if (typeof window !== 'undefined') {
            item = localStorage.setItem('basket', JSON.stringify(clone));
          }
          state.items = clone;
        }
      }
    },
    handleDetail: (state, action) => {
      //state.items değiştirilemez bir obje olduğundan bir clone unu oluşturuyoruz
      let clone = [...state.items];
      //gelen öğenin index değerini alıyoruz
      const findex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findex != -1) {
        //tekrar tekrar aynı üründen eklemeyelim
        clone[findex].total = clone[findex].total + action.payload.total;
        //son olarak da state i clone a eşitliyoruz
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(clone));
        }
        state.items = clone;
      } else {
        //gelen öğe state de bulunmuyorsa pushlayıp state e eşitliyoruz
        clone.push({ ...action.payload, total: action.payload.total });
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(clone));
        }
        state.items = clone;
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  handleFavorites,
  handleBasketTotal,
  handleDetail,
} = basketSlice.actions;

export default basketSlice.reducer;
