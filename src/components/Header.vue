<template>
  <div class="home container-fluid">
        <div class="bg-primary text-center text-white bg-opacity-50 mb-3">
            <h1>SOYUZ TMA-M</h1>
            <h3>SPACECRAFT</h3>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <h3 class="display-5 text-center text-white">Future Projects</h3>
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src="../assets/images/project-image1.jpg" class="d-block w-100 " alt="project-image1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/images/project-image2.jpg" class="d-block w-100 " alt="project-image2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/images/project-image3.jpg" class="d-block w-100" alt="project-image3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/images/project-image4.jpg" class="d-block w-100" alt="project-image4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fourd slide label</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="mt-2 text-center">
            <button type="button" class="btn btn-secondary btn-lg" disabled>Read More</button>
        </div>
    </div>
    <div class="container-fluid bg-secondary text-center text-white relleno">
        <h1>OUR MISSION</h1>
        <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
    </div>
    <!-- Cards dobles en horizontal -->
    <div class="row bg-primary">
        <div class="col-sm-6">
          <div class="card bg-primary">
            <div class="card-body text-center text-white">
                <!-- Figures -->
                <figure class="figure">
                    <h1>FEATURED VIDEO</h1>
                    <a href="blog.html"><img src="../assets/images/mars-rover.jpg" class="figure-img img-fluid rounded" alt="..."></a>
                    <figcaption class="figure-caption">Mars Rover</figcaption>
                </figure>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card bg-primary text-center text-white">
            <h1 class="mt-3">LATEST BLOG</h1>
            <div class="card-body">
                <!-- Carrusel -->
                <div id="carouselExampleDark" class="carousel slide margen" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <!-- Card con imagen lateral -->
                            <div class="card mb-3" style="max-width: 540px; background-color: #a3a3a3;">
                                <div class="row g-0 bg-primary">
                                <div class="col-md-4 mt-3">
                                    <img src="../assets/images/finding-planet.jpg" class="img-fluid rounded-start" alt="finding-planet">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title"><a href="./blog.html" class="text-decoration-none text-white">FINDING PLANET X-123</a></h5>
                                    <p class="card-text">FEBRUARY 6,2023</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <!-- Card con imagen lateral -->
                            <div class="card mb-3" style="max-width: 540px; background-color: #a3a3a3;">
                                <div class="row g-0 bg-primary">
                                <div class="col-md-4 mt-3">
                                    <img src="../assets/images/new-satellitedish.jpg" class="img-fluid rounded-start" alt="new-satellitedish">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title"><a href="./blog.html" class="text-decoration-none text-white">NEW SATELLITE DISH</a></h5>
                                    <p class="card-text">FEBRUARY 3, 2023</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div> 
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
}
</script>

<style >

</style>