import React from "react";
import { DivAllSerarch, InputSearch, InputSubmit, Select } from "./style";

const Search = () => {
  return (
    <DivAllSerarch>
      <form>
        <InputSearch type="search" id="search" placeholder="Search" />
        <Select id="">
          <option value="1">All category</option>
        </Select>
        <InputSubmit type="submit" value="Search" />
      </form>
    </DivAllSerarch>
  );
};

export default Search;
