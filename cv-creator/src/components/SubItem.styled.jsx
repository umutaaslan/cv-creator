const SubItem = ({index, item, subItems, setSubItems}) => {

    const handleChange = (e) => { 
        const newSubItems = subItems;
        const currItem = newSubItems.find(element => element.id === item.id);
        currItem[e.target.name] = e.target.value

        const resultSubItems = newSubItems.map(el => {
            return el.id === currItem.id ? currItem : el;
        })
        setSubItems([...resultSubItems])
    }



    //bind with value
    return ( 
        <>
        <h2>SubItem {index} </h2>
        <label>
            <h5>SubItem title</h5>
            <input type="text" name="title" onChange={(e) => handleChange(e)}/>
        </label>
        <label>
            <h5>SubItem detail</h5>
            <input type="text" name="detail" onChange={(e) => handleChange(e)}/>
        </label>
        </>
     );
}
 
export default SubItem;