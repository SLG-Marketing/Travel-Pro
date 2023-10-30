const expands2 = {
  openAccordion: function(elements) {  
    const contentHeight = elements.content.scrollHeight;
    elements.content.style.height = contentHeight + 'px'
  },
  closeAccordion: function(elements) {
    requestAnimationFrame(() => {
      elements.content.style.height = '0px';
    })
  },
  toggle: function(elements) {
    const expanded = elements.trigger.getAttribute('aria-expanded');

    if(expanded === 'true') {
      elements.trigger.setAttribute('aria-expanded', 'false');
      this.closeAccordion(elements);
    } 
    else {
      elements.trigger.setAttribute('aria-expanded', 'true');
      this.openAccordion(elements);
    }
  },
  init: function() {
    const expands = document.querySelectorAll('.tp-expand-2');

    expands.forEach(expand => {
      const elements = {
        trigger: expand.querySelector('.tp-expand-2__trigger'),
        content: expand.querySelector('.tp-expand-2__content')
      }

      elements.trigger.addEventListener('click', () => this.toggle(elements))

      elements.trigger.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
          this.toggle(elements)
        }
      })
    });
  }
}

export default expands2;