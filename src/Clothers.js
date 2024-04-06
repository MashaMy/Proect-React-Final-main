function Clothers({ newClothers }) {


    return (
        <div className="products">
            {newClothers.map((element => {
                const { id, name, image } = element;

                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="300px" height="400px" alt="Cloth" />
                        <div>
                            <h3>{name}</h3>
                        </div>
                    </div>
                )
            }
            ))}
        </div>
    )
}

export default Clothers;
