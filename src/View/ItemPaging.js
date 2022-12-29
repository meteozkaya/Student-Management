import { useEffect } from "react";

function ItemPaging({numItems, currPage, setNewPage, numItemsPerPage, setPerPage}){
    const numPages = Math.ceil(numItems/numItemsPerPage);
    const pageNums = [];
    const perNums = [5,8,10]

    for (let i=0; i<numPages; i++) pageNums.push(i);
    useEffect(() => { 
        if(Math.ceil(numItems/numItemsPerPage) <= currPage)
        {
            setNewPage(Math.ceil(numItems/numItemsPerPage)-1  );
        }
    })

    return (
        <div className="row bg-gray p-3 m-0">

            <div className="col-5">
                <span><strong>{numItems}</strong> öğrenciden <strong>{(currPage+1)*numItemsPerPage >= numItems ? `${currPage*numItemsPerPage+1}-${numItems}`:
                 `${currPage*numItemsPerPage+1}-${(currPage+1)*numItemsPerPage}`}</strong> arası gösteriliyor</span>
            </div>

            <section id="pageNums" className="col-5">
                {
                    pageNums.map(page => (
                            <button 
                            key={page}
                            className={page===currPage? 'btn border border-2 pagebtn active': 'btn border border-2 pagebtn bg-white'}
                            onClick={()=>setNewPage(page)}>
                                {page+1}
                            </button>
                        ))
                }
            </section>    

            <div className="col-2 p-0 d-flex">
                {
                    perNums.map(per =>(
                            <button 
                            key={per} 
                            className={per === numItemsPerPage? 'perPageBtn perPageBtn-'+per+' px-2 active': 'perPageBtn perPageBtn-'+per+' px-2'}
                            onClick={()=>setPerPage(per)}>
                                {per}
                            </button>
                        )
                    )
                } 
                
            </div>

        </div>


        
    )
} // end-PageNums

export default ItemPaging;
