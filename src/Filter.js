export const Filter = ({ buttons, data, setData  }) => {

    const filtered = searchTerm => {
        const FilteredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(term => {
                if (term === searchTerm) {
                    FilteredResult.push(item);
                    setData(FilteredResult);
                }
            })
        })
    }

    return (
        <div className="cont">
            {
                buttons.map(btn =>
                    <button
                        key={btn.searchTerm}
                        className="change"
                        onClick={() => filtered(btn.searchTerm)}
                    >
                        {btn.text}
                    </button>)
            }
        </div>
    );
};
