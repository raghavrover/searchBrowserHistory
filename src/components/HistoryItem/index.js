import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-content-card">
        <img src={logoUrl} className="website-logo" alt="domain logo" />
        <div className="history-page-dmn-container">
          <p className="web-page-name">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-icon-container"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
            onClick={deleteItem}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
