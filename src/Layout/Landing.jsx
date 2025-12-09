export default function Landing() {
  return (
    <div className="landing-page">
      {/* Collage Section */}
      <div className="container-fluid pt-5">
        <div className="row mb-4 mb-lg-5 justify-content-lg-between">
          {/* Left Spacer */}
          <div className="col-3 col-md-1 col-lg-2 d-none d-md-flex align-items-center">
            <div className="bg-dark ratio ratio-1x1 opacity-25"></div>
          </div>

          {/* Left Column Images */}
          <div className="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
            <div className="bg-primary ratio ratio-1x1 opacity-25"></div>
            <img
              className="img-fluid mt-2"
              src="https://images.unsplash.com/photo-1531445075774-bfb641f42229?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8Njd8fGJ1aWxkaW5nfGVufDB8Mnx8fDE2MzQ1NTE3NDg&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
              alt="Photo by Meriç Dağlı"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Center Image */}
          <div className="col-4 col-md-4 col-lg-3">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1526546334624-2afe5b01088d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MzF8fGJ1aWxkaW5nfGVufDB8MXx8fDE2MzQ1NTE2NTE&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Photo by Simone Hutsch"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Column Images */}
          <div className="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
            <img
              className="img-fluid mb-2"
              src="https://images.unsplash.com/photo-1528810084506-41bd091551af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDJ8fGJ1aWxkaW5nfGVufDB8Mnx8fDE2MzQ1NTE3NDE&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
              alt="Photo by Simone Hutsch"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-primary ratio ratio-1x1 opacity-25"></div>
          </div>

          {/* Right Spacer */}
          <div className="col-3 col-md-1 col-lg-2 d-none d-md-flex align-items-center">
            <div className="bg-dark ratio ratio-1x1 opacity-25"></div>
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="container text-center">
        <h1 className="rfs-25 fw-bold">
          The quick brown fox jumps over the lazy dog
        </h1>
        <p className="lead mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          metus id ligula malesuada placerat sit amet quis enim.
        </p>
      </div>
    </div>
  );
}
