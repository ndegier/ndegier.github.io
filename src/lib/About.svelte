<script>
  // Placeholder profile image - replace with actual image later
  const profileImage = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400';
</script>

<section class="about">
  <div class="profile">
    <img src={profileImage} alt="Mayra aan het werk" />
  </div>
  <div class="text">
    <h2>Handgemaakte keramiek door Mayra</h2>
    <p>Keramiek geïnspireerd door de natuur</p>
  </div>
</section>

<style>
  .about {
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .profile {
    flex: 1;
  }

  .profile img {
    width: 100%;
    max-width: 400px;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .text {
    flex: 1;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 768px) {
    .about {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
  }
</style> 