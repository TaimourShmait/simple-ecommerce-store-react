interface Props {
  setCurrentPage: (currentPage: string) => void;
}

const Home = ({ setCurrentPage }: Props) => {
  return (
    <div id="home" className="w-100 d-flex flex-column gap-3">
      <div
        id="cover"
        className="w-100 d-flex justify-content-center align-items-center"
      >
        <button
          className="btn btn-dark border-3 p-3 d-flex justify-content-center align-items-center"
          id="shop-now-btn"
          onClick={() => setCurrentPage("products")}
        >
          Shop Now
        </button>
      </div>

      <div
        id="about"
        className="w-100 d-flex justify-content-around gap-4 py-5"
      >
        <div className="about-card text-center p-4 border border-2 rounded d-flex flex-column gap-2">
          <i className="bi bi-shield-check fs-1 text-warning mb-3"></i>
          <h5>30-Day Guarantee</h5>
          <p className="text-muted">
            Not satisfied? Return within 30 days for a full refund.
          </p>
        </div>
        <div className="about-card text-center p-4 border border-2 rounded d-flex flex-column gap-2">
          <i className="bi bi-truck fs-1 text-warning mb-3"></i>
          <h5>Free Delivery</h5>
          <p className="text-muted">
            Free shipping on all orders over $50. Fast and reliable.
          </p>
        </div>
        <div className="about-card text-center p-4 border border-2 rounded d-flex flex-column gap-2">
          <i className="bi bi-headset fs-1 text-warning mb-3"></i>
          <h5>24/7 Support</h5>
          <p className="text-muted">
            Need help? Our customer service team is always here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
