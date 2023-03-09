<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                GitHub <span>Search</span>
            </a>    
            <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">INÍCIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">FAVORITOS</a>
                    </li>
                </ul>
            </div>
    </div>
    </nav>
</template>

<script>

export default {
    name: 'Menu',
}
</script>

<style scoped>
.navbar {
    background-color: #D9D9D9;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 54px;
}
ul li a {
    font-weight: bold;
}

.navbar-brand {
    font-weight: bold;
    font-size: 2rem;
}

.navbar-brand span {
    font-weight: normal !important;
    font-style: italic !important;
}

.active {
    color: #FF0000 !important;
}
</style>
