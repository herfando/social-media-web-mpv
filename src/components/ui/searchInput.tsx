import { Input } from './input';
import type { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className='h-48'>
      <Input
        {...props}
        style={{ paddingLeft: '42px' }}
        className={`h-full w-full pl-42 ${props.className ?? ''}`}
      />
    </div>
  );
}
