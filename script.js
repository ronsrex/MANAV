function openPaymentGateway() {
  window.location.href = "https://your-payment-gateway.com";
}
const track = document.getElementById('sponsorTrack');
    let scrollPosition = 0;
    const scrollWidth = 220; // Circle width + gap

    function moveCarousel(direction) {
      // Pause the animation
      track.style.animation = 'none';
      
      // Calculate new position
      scrollPosition += direction * scrollWidth;
      
      // Reset position if reached end
      const maxScroll = -(scrollWidth * (track.children.length / 2));
      if (scrollPosition < maxScroll) {
        scrollPosition = 0;
      } else if (scrollPosition > 0) {
        scrollPosition = maxScroll + scrollWidth;
      }
      
      // Apply new position
      track.style.transform = `translateX(${scrollPosition}px)`;
      
      // Resume animation after manual control
      setTimeout(() => {
        track.style.animation = 'scroll 10s linear infinite';
      }, 5000);
    }

    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });