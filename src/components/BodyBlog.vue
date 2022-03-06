<template>
    <div class="bg-primary">
        <div class="bg-secondary">
            <h1 class="text-center text-white pt-3 pb-5">Blog</h1>
        </div>
        <!-- Card header -->
        <div class="card text-center bg-primary">
            <h1 class="card-header text-white">Featured</h1>
            <!-- <div class="card-body">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="../assets/images/astronaut.jpg" class="d-block w-100" alt="astronaut">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>SUCCESFUL REPAIR OF THE MX-1 SAT</h5>
                            <span>FEBRUARY 6, 2023</span>
                            <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/images/satellite-dish.jpg" class="d-block w-100" alt="satellite-dish">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ALIEN SIGNAL DISCOVERY</h5>
                            <span>FEBRUARY 3, 2023</span>
                            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
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
                <a href="#" class="btn btn-primary">Read More</a>
            </div>-->
        </div>
        <!-- Card doble -->
        <div class="row bg-primary">
            <div class="col-sm-6">
                <div class="card bg-primary">
                <div class="card-body text-center text-white">
                    <!-- Figures -->
                    <figure class="figure">
                        <h1>FEATURED POSTS</h1>
                        <a href="blog.html"><img src="../assets/images/moon-satellite.jpg" class="figure-img img-fluid rounded" alt="moon-satellite"></a>
                        <h4>SOYUZ TMA-M</h4>
                        <figcaption class="figure-caption">FEABRUARY 6, 2023</figcaption>
                    </figure>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-primary text-center text-white">
                <h1 class="mt-3">RECENT POSTS</h1>
                <div class="card-body">
                    <!-- Carrusel -->
                    <!-- <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                            <div class="card mb-3" style="max-width: 540px; background-color: #1c1c1c;">
                                <div class="row g-0 bg-primary">
                                    <div class="col-md-4 mt-3">
                                        <img src="../assets/images/alien-life.jpg" class="img-fluid rounded-start w-100" alt="alien-life">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title"><a href="./blog.html" class="text-decoration-none text-white">ALIEN LIFE</a></h5>
                                            <p class="card-text">FEBRUARY 3, 2023</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000"> -->
                                <!-- Card con imagen lateral -->
                                <!-- <div class="card mb-3" style="max-width: 540px; background-color: #1c1c1c;">
                                    <div class="row g-0 bg-primary">
                                        <div class="col-md-4 mt-3">
                                            <img src="../assets/images/galaxy.jpg" class="img-fluid rounded-start w-100" alt="galaxy">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><a href="./blog.html" class="text-decoration-none text-white">THE GALAXY</a></h5>
                                                <p class="card-text">FEBRUARY 1, 2023</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> -->
                </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  name: "BodyBlog",
  props: {
    msg: String
  }
}
</script>

<style>

</style>