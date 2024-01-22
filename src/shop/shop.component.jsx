import SHOP_DATA from '../../src/shop-data.json';

const SHOP = ()=>{
    return(
        <div>
            {
                SHOP_DATA.map(({id, name})=>(
                    <div key={id}>
                        <h1>{name}</h1>
                    </div>
                ))
            }
        </div>
        
    )
}

export default SHOP;