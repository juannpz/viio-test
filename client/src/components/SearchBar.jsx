/* eslint-disable react/prop-types */
const SearchBar = ({ search, setSearch }) => {
    return (
        <div
            className="p-4">

            <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={event => setSearch(event.target.value)} />
        </div>
    )
}

export default SearchBar