import React from 'react';

const FilterComponent = () => {
  return (
    <div className="bg-white text-lg px-4 py-3 h-1/2 rounded-lg shadow-md">
      <p className="text-lg font-medium mb-2">Fiyat Aralığı</p>
      <div className="flex flex-col space-y-2">
        <label>
          <input type="radio" name="price" value="0-100" />
          <span className="ml-2">0-100 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="100-250" />
          <span className="ml-2">100-250 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="250-500" />
          <span className="ml-2">250-500 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="500-1000" />
          <span className="ml-2">500-1000 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="1000-2500" />
          <span className="ml-2">1000-2500 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="2500-5000" />
          <span className="ml-2">2500-5000 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="5000-9000" />
          <span className="ml-2">5000-9000 TL</span>
        </label>
        <label>
          <input type="radio" name="price" value="9000-15000" />
          <span className="ml-2">9000-15000 TL</span>
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
