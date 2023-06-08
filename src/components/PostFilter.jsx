import React from 'react';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export const PostFilter = ({ filter, setfilter }) => {
  return (
    <div>
      <MyInput
        placeholder='Поиск...'
        value={filter.query}
        onChange={(e) => setfilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setfilter({ ...filter, sort: selectedSort })
        }
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
};
