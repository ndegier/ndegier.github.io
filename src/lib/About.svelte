<script>
  // Placeholder profile image - replace with actual image later
  import profileImage from '../assets/mayra_pf.jpg';
</script>

<section class="about" id="about">
  <div class="header">
    <h2>Over mij</h2>
  </div>
  <div class="content">
    <div class="profile">
      <img src={profileImage} alt="Mayra aan het werk" />
    </div>
    <div class="text">
      <h3>Handgemaakte keramiek door Mayra</h3>
      <p class="subtitle">Keramiek geïnspireerd door de natuur</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam scelerisque, dui eu pulvinar tincidunt, purus lorem vestibulum lectus, in eleifend nisl sem vel diam. Donec pharetra, est quis convallis venenatis, nisi tellus pulvinar magna, in porttitor elit lectus eget sem.</p>
      <p>Sed ut elementum dui. Praesent gravida facilisis nisl eget tempus. Nullam quis tincidunt diam. Vestibulum viverra hendrerit cursus. Etiam accumsan est eu tellus commodo, vitae maximus justo viverra.</p>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .header h2 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #333;
    margin: 0;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .profile {
    flex: 1;
  }

  .profile img {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .text {
    flex: 1;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 1rem;
    color: #333;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
    font-style: italic;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .profile img {
      max-width: 300px;
    }
  }
</style> 