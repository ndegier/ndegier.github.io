<script>
  const items = [
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Handgemaakte vaas',
      description: 'Een unieke vaas geïnspireerd door natuurlijke vormen en texturen.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Keramische schaal',
      description: 'Elegante schaal met organische patronen en natuurlijke glazuur.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Servies set',
      description: 'Complete set handgemaakt servies in harmonieuze aardetinten.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Decoratieve pot',
      description: 'Sierlijke pot met unieke textuur en natuurlijke uitstraling.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Bloempot collectie',
      description: 'Serie handgemaakte bloempotten in verschillende formaten.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400',
      title: 'Keramische kunst',
      description: 'Artistieke keramische objecten voor binnen en buiten.'
    }
  ];
</script>

<section class="gallery" id="portfolio">
  <div class="header">
    <h2>Portfolio</h2>
    <p>Een selectie van mijn handgemaakte keramiek</p>
  </div>
  
  <div class="grid">
    {#each items as item}
      <div class="item">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .gallery {
    padding: 4rem 2rem;
    background-color: white;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .header h2 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #333;
    margin: 0;
  }

  .header p {
    font-size: 1.2rem;
    color: #666;
    margin: 1rem 0 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .item {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .item:hover {
    transform: translateY(-5px);
  }

  .item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .item h3 {
    font-size: 1.2rem;
    margin: 1rem;
    color: #333;
  }

  .item p {
    font-size: 1rem;
    margin: 0 1rem 1rem;
    color: #666;
    line-height: 1.4;
  }
</style> 