
import React from 'react';
import { Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type SortOption = 'all' | 'views' | 'likes' | 'comments' | 'saves' | 'date';

interface FilterDropdownProps {
  onSortChange: (option: SortOption) => void;
  currentSort: SortOption;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onSortChange, currentSort }) => {
  return (
    <div className="flex items-center">
      <div className="w-[200px]">
        <Select value={currentSort} onValueChange={(value: SortOption) => onSortChange(value)}>
          <SelectTrigger className="bg-background border border-input hover:bg-accent hover:text-accent-foreground dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex items-center gap-2">
              <Filter size={16} />
              <SelectValue placeholder="Sort videos by" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-popover dark:bg-gray-800 dark:border-gray-700">
            <SelectGroup>
              <SelectItem value="all" className="cursor-pointer">All videos</SelectItem>
              <SelectItem value="views" className="cursor-pointer">Most views</SelectItem>
              <SelectItem value="likes" className="cursor-pointer">Most likes</SelectItem>
              <SelectItem value="comments" className="cursor-pointer">Most comments</SelectItem>
              <SelectItem value="saves" className="cursor-pointer">Most saves</SelectItem>
              <SelectItem value="date" className="cursor-pointer">Latest first</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterDropdown;
