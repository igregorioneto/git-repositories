<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-md-12 row d-flex justify-content-center">
                <i
                    class="bi bi-github rounded-circle" 
                    alt="Github avatar" >
                </i>
            </div>

            <div class="col-md-12 row d-flex justify-content-center not-found">
                <h2>
                    Desculpe!<br>

                    404<br>

                    Página não encontrada!<br>
                </h2>
            </div>
            
        </div>

    </div>
</template>

<script>

export default {
    name: 'PageNotFound',
}
</script>

<style scoped>
.bi.bi-github {
    font-size: 150px;
    text-align: center;
}

.container {
  margin: 0 auto;
}

div .not-found {
    text-align: center;
}

</style>