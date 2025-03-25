<script>
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import Gallery from './lib/Gallery.svelte';
  import Footer from './lib/Footer.svelte';
  import Navbar from './lib/Navbar.svelte';
</script>

<main>
  <Navbar />
  <Hero />
  <About />
  <Gallery />
  <Footer />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #faf7f2;
  }

  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
