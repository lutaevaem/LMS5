(function(){
  function apply(tone){
    document.body.classList.remove('tone-friendly','tone-performance');
    document.body.classList.add('tone-'+tone);
    try{localStorage.setItem('tone', tone);}catch(e){}
    document.querySelectorAll('.tone-btn').forEach(function(btn){
      btn.setAttribute('aria-pressed', btn.dataset.tone===tone ? 'true' : 'false');
    });
  }
  var saved='friendly'; try{ saved=localStorage.getItem('tone')||'friendly'; }catch(e){}
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.tone-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ apply(this.dataset.tone); });
    });
    apply(saved);
  });
})();