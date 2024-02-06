import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { highlightMatch } from "./modules/highlightMatch";
import { filterData } from "./modules/filterData";
import { getDataByKey } from "./modules/getDataByKey";
import styled from "styled-components";
import { Color } from "../../shared/constants/color";

const { COLOR_000000_030, COLOR_000000_0060 } = Color;

export const AutoFilterDropdown = memo(
  ({ data, property, valueChange, onSelect, id }) => {
    const [filterValue, setFilterValue] = useState("");
    const [isHide, setIsHide] = useState(true);

    const rootRef = useRef();

    const handleFilterChange = useCallback(
      (e) => {
        const { value } = e.target;
        setIsHide(false);
        setFilterValue(value);
        valueChange(filterData({ data, property, filterValue: value }));
      },
      [data, property, valueChange]
    );

    const handleClickItem = useCallback(
      (item) => () => {
        const value = getDataByKey(item, property);
        setIsHide(true);
        setFilterValue(value);
        // ======
        // I think
        valueChange(filterData({ data, property, filterValue: value }));
        // ======
        onSelect(item);
      },
      [data, onSelect, property, valueChange]
    );

    const handleFocus = useCallback(() => {
      setIsHide(filterValue === "");
    }, [filterValue]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (rootRef.current && !rootRef.current.contains(event.target)) {
          setIsHide(true);
        }
      };

      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, []);

    const filteredData = filterData({ data, property, filterValue });

    return (
      <Root ref={rootRef}>
        <Input
          type="text"
          placeholder="Type to filter..."
          value={filterValue}
          onChange={handleFilterChange}
          onFocus={handleFocus}
        />
        {!isHide && (
          <Ul>
            {filteredData.map((item, index) => (
              <Li key={getDataByKey(item, id)} onClick={handleClickItem(item)}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(
                      getDataByKey(item, property),
                      filterValue
                    ),
                  }}
                />
              </Li>
            ))}
          </Ul>
        )}
      </Root>
    );
  }
);

const Root = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 4px 8px;
  width: 250px;
`;

const Ul = styled.ul`
  position: absolute;
  list-style-type: none;
  top: 100%;
  box-shadow: 0 10px 10px 0 ${COLOR_000000_030};
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

const Li = styled.li`
  padding: 4px 10px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${COLOR_000000_0060};
  }
`;
