import React from 'react'

const Moves = (pokes) => {
  return (
    <div>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Stats of {pokes.poke.name&&(pokes.poke.name)}:</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="container offcanvas-body">
          <div className='col-3 d-table-cell'>
              {pokes.poke.stats&&(
                  pokes.poke.stats.map((element, index)=>{return(
                3>=index&&(<p key={index}>{(index+1)+". "+element.stat.name+": "+element.base_stat}</p>)            
                )})
              )}
              </div>
              <div className='col-3 d-table-cell'>
              {pokes.poke.stats&&(
                pokes.poke.stats.map((element, index)=>{return(
                3<index&&(<p key={index}>{(index+1)+". "+element.stat.name+": "+element.base_stat}</p>)            
                )})
              )}
              </div>         
        </div>
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Moves:</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="container offcanvas-body">
            <div className='col-3 d-table-cell'>
            {pokes.poke.moves&&(
                pokes.poke.moves.map((element, index)=>{return(
              (pokes.poke.moves.length/2)>index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
              )})
            )}
            </div>
            <div className='col-3 d-table-cell'>
            {pokes.poke.moves&&(
              pokes.poke.moves.map((element, index)=>{return(
              (pokes.poke.moves.length/2)<=index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
              )})
            )}
            </div>            
        </div>
        </div> 
    </div>
  )
}

export default Moves


/*
import React from 'react'

const Moves = (moves) => {
  return (
    <div>        
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Information:</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="container offcanvas-body">
            <div className='col-3 d-table-cell'>
            {moves.data.map((element, index)=>{return(
            (moves.data.length/2)>index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
            )})}
            </div>
            <div className='col-3 d-table-cell'>
            {moves.data.map((element, index)=>{return(
            (moves.data.length/2)<=index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
            )})}
            </div>            
        </div>

        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Moves:</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="container offcanvas-body">
            <div className='col-3 d-table-cell'>
            {moves.data.map((element, index)=>{return(
            (moves.data.length/2)>index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
            )})}
            </div>
            <div className='col-3 d-table-cell'>
            {moves.data.map((element, index)=>{return(
            (moves.data.length/2)<=index&&(<p key={index}>{(index+1)+". "+element.move.name}</p>)            
            )})}
            </div>            
        </div>
        </div>
    </div>
  )
}

export default Moves
*/