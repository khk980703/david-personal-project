export default function PaymentPage() {
  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-page-container">
        <p>Total: ${2997}</p>
        <div style={{ display: 'flex', margin: '200px' }}>
          <button>Check Out</button>
          <button>Check Out with Apple Pay</button>
        </div>
      </div>
    </div>
  )
}
