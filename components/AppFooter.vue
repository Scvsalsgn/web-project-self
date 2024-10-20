<template>
    <footer class="footer bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <!-- About us -->
                <div class="col-md-4">
                    <!-- <img :src="" alt=""> -->
                    <h5>ABOUT US</h5>
                    <p>Welcome to our website, where you can find rich travel information and the best travel strategies
                        in Haikou.</p>
                </div>

                <!-- Quick Links -->
                <div class="col-md-4">
                    <h5>QUICK LINKS</h5>
                    <ul class="list-unstyled">
                        <li><router-link to="/" class="text-white">主页</router-link></li>
                        <li><router-link to="/attractions" class="text-white">景点推荐</router-link></li>
                        <li><router-link to="/community" class="text-white">互动社区</router-link></li>
                        <li><router-link to="/services" class="text-white">游客服务</router-link></li>
                    </ul>
                </div>

                <!-- CONTACT US -->
                <div class="col-md-4">
                    <h5>CONTACT US</h5>
                    <ul class="list-unstyled contact-info">
                        <li>
                            <i class="fas fa-phone-alt"></i> Phone: +86 123 456 789
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i> Email: contact@tourguide.com
                        </li>
                        <li class="address-item">
                            <i class="fas fa-map-marker-alt"></i> Address: No. 58 Renming Avenue, Meilan District,
                            Haikou City, Hainan Province
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col text-center">
                    <p>&copy;Rythem of Coconut and Sea. </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
.footer {
    background-color: #343a40;
    color: #ffffff;
    padding: 20px 0;
}

.contact-info li {
    margin-bottom: 10px;
}

.contact-info i {
    margin-right: 8px;
}

.footer a {
    color: #ffffff;
    transition: color 0.3s;
}

.footer a:hover {
    color: #dddddd;
}

.address-item {
    position: relative;
    padding-left: 25px;
}

.address-item i {
    position: absolute;
    left: 0;
    top: 0;
}

.address-item span {
    display: inline-block;
    margin-left: 25px;
}
</style>