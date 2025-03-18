<script>
  import forestBackground from '../assets/forestBackground.jpg?url';
</script>

<section class="hero">
  <div class="background-container">
    <img src={forestBackground} alt="" class="background-image" />
    <div class="overlay"></div>
  </div>
  <div class="content">
    <h1>Mayra van der Waal</h1>
    <h2>Handgemaakte keramiek</h2>
    <div class="buttons">
      <button class="primary">Portfolio</button>
      <button class="secondary">Contact</button>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
  }

  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .content {
    position: relative;
    padding: 2rem;
  }

  h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: 300;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem 0 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:hover {
    transform: translateY(-2px);
  }

  .primary {
    background-color: white;
    color: #333;
  }

  .secondary {
    background-color: transparent;
    border: 2px solid white;
    color: white;
  }
</style> 