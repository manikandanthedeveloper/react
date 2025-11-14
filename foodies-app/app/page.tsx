import ImageSlideshow from "@/componets/ImageSlideshow";

const HomePage = () => {
  return <>
    <ImageSlideshow />
    <main>
      <section className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <h2>How it works</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Why NextLevel Food?</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default HomePage;