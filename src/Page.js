function Page(){
  return(
    <div className="d-flex justify-content-end mt-2">
    <nav aria-label="Page navigation example">
    <ul className="pagination">
    <li className="page-item">
    <a className="page-link" href="#" aria-label="Previous">
    <span aria-hidden="true">«</span></a></li>
    <li className="page-item"><a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>

    </div>  )

}

export default Page;