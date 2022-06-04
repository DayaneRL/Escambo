import React,{useState} from "react"
import{CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'
export default function Modal({visible, setVisible}){

    return (
    <>
        <CModal scrollable visible={visible} onClose={() => setVisible(!visible)}>
            <CModalHeader onClose={() => setVisible(!visible)}>
                <CModalTitle>Termos de uso</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <h4>Função do site</h4>
                <p>
                    Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A Escambo busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.
                    <br/>Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a Escambo ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.
                    <br/>É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.
                </p>
                <h4> Aceite dos termos </h4>
                <p>
                    Este termo especifica e exige que todo usuário ao acessar o site da Escambo, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a Escambo e o usuário direitos e obrigações entre ambas as partes, aceitos expressamente pelo usuário a permanecer navegando no site da Escambo.
                    <br/>Ao continuar acessando o site, o usuário expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o usuário discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.
                </p>
                <h4> Acesso ao site </h4>
                <p>
                    O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.
                    <br/>A Escambo não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.
                    <br/>Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o usuário concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da Escambo.
                </p>
                <h4>Licença de uso e cópia</h4>
                <p>
                    O usuário poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.
                    <br/>Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis.
                    <br/>Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo a Escambo todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.
                    <br/>A Escambo poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é revogável e limitado as especificações de cada caso.
                </p>
                <h4>Obrigações</h4>
                <p>
                    O usuário ao utilizar o website da Escambo, concorda integralmente em:
                </p>
                    <ul>
                        <li>
                        De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hacker, destruir ou prejudicar a estrutura do site, plataforma da Escambo ou de seus parceiros comerciais. Incluindo-se, mas não se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso indevido por falhas da mesma ou quaisquer outras forma e meio.
                        </li>
                        <li>
                        De não realizar divulgação indevida nos comentários do site de conteúdo de SPAM, Escambos concorrentes, vírus, conteúdo que não possua direitos autorais ou quaisquer outros que não seja pertinente a discussão daquele texto, vídeo ou imagem.
                        </li>
                        <li>
                            Da proibição em reproduzir qualquer conteúdo do site ou plataforma sem autorização expressa, podendo responder civil e criminalmente pelo mesmo.
                        </li>
                        <li>
                            Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e visita no site, podendo a qualquer momento e forma, requerer a exclusão dos mesmos, através do formulário de contato.
                        </li>
                    </ul>
                <h4>Termos Gerais</h4>
                <p>
                    O Site irá apresentar hiperlinks durante toda a sua navegação, que podem levar diretamente para outra página da Escambo ou para sites externos.
                    <br/>Apesar da Escambo apenas criar links para sites externos de extrema confiança, caso o usuário acesse um site externo, a Escambo não tem nenhuma responsabilidade pelo meio, sendo uma mera indicação de complementação de conteúdo, ficando o mesmo responsável pelo acesso, assim como sobre quaisquer ações que venham a realizar neste site.
                    <br/><br/>Este Termo de uso é valido a partir de 04 de junho de 2022.
                </p>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" className="text-white" onClick={() => setVisible(!visible)}>
                Close
                </CButton>
            </CModalFooter>
        </CModal>
    </>
    )
}