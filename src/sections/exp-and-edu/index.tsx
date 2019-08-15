import React, { FC } from 'react'
import Hero from '../../components/hero'
import Accordion from '../../components/accordion'
import Divider from '../../components/divider'

const ExpAndEdu: FC = () => (
  <>
    <Hero title="experience" subtitle="what I've been thru" theme="light">
      <Accordion title="Alibaba Inc." subtitle="Frontend Engineer Intern" from="Jul '19">
        <p>There's a saying that frontend engineers in China are either working for Alibaba, or on the way to Alibaba. So it's really my honor to have this internship experience at Alibaba Inc.</p>
        <p>During the internship, I learned about internal solution for various of business, participated in the maintenance of a internal UI component library, and gain a lot of skills for real-world projects.</p>
      </Accordion>
      <Divider />
      <Accordion title="Bright Tech" subtitle="Frontend Engineer Intern" from="Jul" to="Sep '18">
        <p>The internship at Bright Tech is the very first job I've ever got. Yet nothing special.</p>
      </Accordion>
      <Divider />
      <Accordion title="CSEC" subtitle="Fullstack Engineer" from="Mar" to="Apr '19">
        <p>Built with Angular 7 and ASP.NET Core 2.2, the CSEC site is a full solution for the CSEC competition held by Shenzhen University.</p>
        <p>Now the site has fulfilled what it's been desired, and has provided thousands of visitors and competitors a convenient service.</p>
      </Accordion>
    </Hero>

    <Hero title="education" subtitle="where I learned" theme="accent">
      <Accordion title="TUST" subtitle="Digital Publishing Bachelor" from="Sep '15">
        <p>I studied a Bachelor of Arts majoring in Digital Publishing at Tianjin University of Science and Technology in China.</p>
        <p>There's a gap between my dream and my major At TUST, so after class I worked hard to establish a good understanding of technical and process skills that are required to excel in the software, especially in web frontend field.</p>
      </Accordion>
    </Hero>
  </>
)

export default ExpAndEdu
