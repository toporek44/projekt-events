import { Filters } from '../types';

interface FilterBarProps {
    filters: Filters;
    setFilters: (filters: Filters) => void;
}

const FilterBar= ({ filters, setFilters }:FilterBarProps) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, search: e.target.value });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, category: e.target.value });
    };

    return (
        <div className="filter-bar">
            <input type="text" placeholder="Search..." value={filters.search} onChange={handleSearchChange} />
            <select value={filters.category} onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="concert">Concert</option>
                <option value="exhibition">Exhibition</option>
                {/* ... other options */}
            </select>
        </div>
    );
};

export default FilterBar;
