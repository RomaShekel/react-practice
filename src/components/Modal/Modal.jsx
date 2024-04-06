export default function Modal({handleModal, handleClicks, state, clicks: {clicks1, clicks2}}) {
    return(
        <div>
        <button onClick={handleModal}>{state ? "hire" : "show"}</button>
        {state && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus exercitationem illo voluptatum totam dolores a. Animi voluptas ratione reiciendis illo molestias, ipsam dolorem consequatur perferendis, deserunt laborum, in vitae!</p>}

        <button onClick={() => handleClicks("clicks1")}>clicks: {clicks1}</button>
        <button onClick={() => handleClicks("clicks2")}>clicks: {clicks2}</button>
        <p>Total clicks: {clicks1 + clicks2}</p>
      </div>
    )
}