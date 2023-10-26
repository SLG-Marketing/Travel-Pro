const expands = {
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
      elements.trigger.querySelector('span').innerHTML = elements.trigger.dataset.more;
      this.closeAccordion(elements);
    } 
    else {
      elements.trigger.setAttribute('aria-expanded', 'true');
      elements.trigger.querySelector('span').innerHTML = elements.trigger.dataset.less;
      this.openAccordion(elements);
    }
  },
  init: function() {
    const expands = document.querySelectorAll('.tp-expand');

    expands.forEach(expand => {
      const elements = {
        trigger: expand.querySelector('.tp-expand__trigger'),
        content: expand.querySelector('.tp-expand__content')
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

export default expands;