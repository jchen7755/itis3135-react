import catPhoto from '../assets/images/CatPhoto.JPG';

function Introduction() {
  return (
    <main>
      <h2>Introduction</h2>
      <h2>Johnny Chen || Judgy Cat</h2>

      <figure>
        <img src={catPhoto} alt="Johnny_Chen" />
        <figcaption>Selfie at in bed in with my cat</figcaption>
      </figure>

      <ul>
        <li>
          <b>Personal Background:</b> I am currently working towards my bachelors and hoping to get my masters after. I am Chinese and I grew up working at my parents' Chinese restaurant.
        </li>
        <li>
          <b>Professional Background:</b> Started working when I was 6, helping my parents in the restaurant. I started serving at my uncle's Japanese restaurant when I became 17 and when I moved to Charlotte for college I started working at Mr Tokyo.
        </li>
        <li>
          <b>Academic Background:</b> Computer Science major concentrating in Cyber Security
        </li>
        <li>
          <b>Primary Computer:</b> Apple Macbook Pro
        </li>
        <li>
          <b>Courses I'm Taking & Why:</b>
          <ul>
            <li>
              <b>ITIS-3135 - Front-End Web App Development:</b> Required in my concentration
            </li>
            <li>
              <b>ITSC-3688 - Computers and Their Impact on Society:</b> Required in my concentration
            </li>
            <li>
              <b>ARTH-1212 - Art History Survey:</b> Easy elective class to fill in credits
            </li>
            <li>
              <b>ARCH-1502 - Global Architecture:</b> Easy elective class to fill in credits
            </li>
            <li>
              <b>ITSC-3146 - Operating Systems and Networking:</b> Required in my concentration
            </li>
          </ul>
        </li>
        <li>
          <b>Funny/Interesting Item to Remember Me by:</b> Despite my young age, I always have some sort of physical pain from playing basketball.
        </li>
      </ul>
      <h2><b>Quote: "It is never too late to be what you might have been."</b> – George Elliot</h2>
    </main>
  );
}

export default Introduction;