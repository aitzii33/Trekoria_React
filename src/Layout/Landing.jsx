
function Landing()
{
    return(
        <div>
            <div class="container-fluid pt-5">
                <div class="row mb-4 mb-lg-5 justify-content-lg-between">
                    <div class="col-3 col-md-1 col-lg-2 d-none d-md-flex align-items-center">
                        <div class="lc-block bg-dark ratio ratio-1x1 opacity-25"></div>
                    </div>

                    <div class="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
                        <div class="lc-block bg-primary ratio ratio-1x1 opacity-25"></div>
                        <div class="lc-block">
                            <img class="img-fluid"
                                src="https://images.unsplash.com/photo-1531445075774-bfb641f42229?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1080&h=1080"
                                alt="Photo by Meriç Dağlı"/>
                        </div>
                    </div>

                    <div class="col-4 col-md-4 col-lg-3">
                        <img class="img-fluid"
                            src="https://images.unsplash.com/photo-1526546334624-2afe5b01088d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                            style="object-fit:cover" alt="Photo by Simone Hutsch"/>
                    </div>

                    <div class="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
                        <div class="lc-block">
                            <img class="img-fluid"
                                src="https://images.unsplash.com/photo-1528810084506-41bd091551af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1080&h=1080"
                                alt="Photo by Simone Hutsch"/>
                        </div>
                        <div class="lc-block bg-primary ratio ratio-1x1 opacity-25"></div>
                    </div>

                    <div class="col-3 col-md-1 col-lg-2 d-none d-md-flex align-items-center">
                        <div class="lc-block bg-dark ratio ratio-1x1 opacity-25"></div>
                    </div>
                </div>
            </div>

            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="lc-block col-md-8">
                        <h1 class="rfs-25 fw-bold">The quick brown fox jumps over the lazy dog</h1>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="lc-block col-xxl-6 col-md-8">
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}