import React, { FC, useState } from 'react'
import Container from '../../components/container'
import Modal from '../../components/modal'
import './index.scss'

const thisYear = new Date().getFullYear()

const Footer: FC = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <footer>
      <Container verticalPadding={3}>
        <p className="footer-copyright">&copy; Siyuan Cao 1997 - {thisYear}. All rights reserved.</p>
        <p>
          <a
            className="footer-anchor"
            href="http://beian.miit.gov.cn/publish/query/indexFirst.action"
            target="_blank"
            rel="noopener noreferrer">
            皖 ICP 备 15024840 号-1
          </a>
        </p>
        <p>
          <a href="javascript:"
            onClick={() => setModalActive(true)}
            className="footer-anchor">
            Licenses
          </a>
          <Modal active={modalActive} onClose={() => setModalActive(false)}>
            <h2>SLI License for Montserrat Font</h2>
            <p>Copyright 2011 The Montserrat Project Authors (<a href="https://github.com/JulietaUla/Montserrat" target="_blank" rel="noopener noreferrer">https://github.com/JulietaUla/Montserrat</a>)</p>
            <p>This Font Software is licensed under the SIL Open Font License, Version 1.1.</p>
            <p>This license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL</p>
            <hr/>
            <p>SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007</p>
            <hr/>
            <h3>PREAMBLE</h3>
            <p>The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.</p>
            <p>The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.</p>
            <h3>DEFINITIONS</h3>
            <p>"Font Software" refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.</p>
            <p>"Reserved Font Name" refers to any names specified as such after the copyright statement(s).</p>
            <p>"Original Version" refers to the collection of Font Software components as distributed by the Copyright Holder(s).</p>
            <p>"Modified Version" refers to any derivative made by adding to, deleting, or substituting -- in part or in whole -- any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.</p>
            <p>"Author" refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.</p>
            <h3>PERMISSION & CONDITIONS</h3>
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:</p>
            <ol>
              <li>Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.</li>
              <li>Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.</li>
              <li>No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.</li>
              <li>The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.</li>
              <li>The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software.</li>
            </ol>
            <h3>TERMINATION</h3>
            <p>This license becomes null and void if any of the above conditions are not met.</p>
            <h3>DISCLAIMER</h3>
            <p>THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.</p>

            <h2>MIT License of React</h2>
            <p>MIT License</p>
            <p>Copyright (c) Facebook, Inc. and its affiliates.</p>
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
            <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

            <h2>MIT License of normalize.css</h2>

            <p>The MIT License (MIT)</p>
            <p>Copyright © Nicolas Gallagher and Jonathan Neal</p>
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
            <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
          </Modal>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
