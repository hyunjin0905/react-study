import React from "react"




const Item = () => {

    const buttonList = ["a","b","c","d","e","f","g","h","i"]
    console.log(convert(buttonList));
    return (
        <>
            {
                convert(buttonList).map((data, index) => {
                    return (
                        <div key={index} style={{display: "flex"}}>
                            {
                                data.map((a,idx) => {
                                    return(
                                        <div key={idx}>
                                            {a}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

        </>
    )
};

const convert = (lists) => {
    const buttonList = [];
    for (let i = 0; i < lists.length; i += 3) {
       buttonList.push(lists.slice(i, i + 3))
    }
    return buttonList
}

export default Item;