<template>
  <div>
    <title-page title="Suporte" />

    <div class="row">
      <div class="col-md-6">
        <div class="shadow-sm p-5 bg-white rounded">
          <h3 class="mb-3 text-dark">Contato administração</h3>
          <div class="text-dark">
            <div class="mb-3">Este é o seu canal direto com nossa equipe.</div>
            <div class="mb-3">
              Alternativamente, você também pode enviar um e-mail para:
              <strong>suporte@b7web.com.br</strong>
            </div>
            <div class="mb-3">Estamos a sua total disposição.</div>
          </div>
          <button class="btn btn-success">
            <i class="bi bi-send"></i> Abrir Ticket
          </button>

          <hr class="my-5" />
          <div class="d-flex justify-content-center align-items-center">
            <div>
              <h4 class="text-center mb-3 font-weight-bold">REDES SOCIAIS</h4>
              <img
                class="mr-3"
                width="70px"
                src="../assets/img/icons/facebook.png"
                alt=""
              />
              <img
                class="mr-3"
                width="70px"
                src="../assets/img/icons/instagram.png"
                alt=""
              />
              <img width="70px" src="../assets/img/icons/whatsapp.png" alt="" />
            </div>
          </div>

          <!--<div v-if="msgSuccess" class="alert alert-success" role="alert">
            <h4 class="alert-heading">Sucesso!</h4>
            <p>
              Sua mensagem foi enviada, em breve retornaremos uma resposta por
              <strong>E-mail</strong> ou <strong>telefone</strong>.
            </p>
          </div>-->

          <!--<form action="">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Assunto: </label>
                  <select class="form-control">
                    <option selected value="duvida">Dúvida</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="pedido">Pedido</option>
                    <option value="financeiro">Financeiro</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Enviar para: </label>
                  <select class="form-control">
                    <option selected value="professor">Professor</option>
                    <option value="administracao">Administração</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Mensagem: </label>
              <textarea class="form-control" cols="30" rows="10"></textarea>
            </div>

            <ButtonsButtonComponent
              title="ENVIAR"
              classStyle="btn-primary btn-block py-3"
            />
          </form>-->
        </div>
      </div>
      <div class="col-md-6">
        <div class="shadow-sm bg-white p-4">
          <div class="bg-light p-3 text-center font-weight-bold rounded">
            Nenhum ticket aberto!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgSuccess: false,
    };
  },
  methods: {
    submit: function () {},
    validated: function () {},
  },
};
</script>