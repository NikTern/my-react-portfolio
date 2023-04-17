import React from 'react';

function AboutMe() {
  return (
    <div className="text-center">
      <p></p>
      <h2>About Me</h2>
      <img src={process.env.PUBLIC_URL + '/profile-pic.png'} alt="Nik Ternezis Profile Photo" className="mx-auto" width="100" height="auto" />
      <p></p>
      <p>"Of all that is written I love only what a man has written with his blood. Write with blood, and you will experience that blood is spirit.
</p><p>
Whoever writes in blood and aphorisms does not want to be read but to be learned by heart. In the mountains the shortest way is from peak to peak: but for that one must have long legs. Aphorisms should be peaks–and those who are addressed, tall and lofty. The air thin and pure, danger near, and the spirit full of gay sarcasm: these go well together.
</p><p>
True, we love life, not because we are used to living but because we are used to loving. There is always some madness in love. But there is also always some method in madness.
</p><p>
I would believe only in a god who knew how to dance. And when I behld my devil I found him serious, thorough, profound, and solemn: it was the spirit of gravity - through him all things are ruined."</p>
    </div>
  );
}

export default AboutMe;
