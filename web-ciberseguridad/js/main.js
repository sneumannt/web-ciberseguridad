$(function () {
  // Test de seguridad en modal
  const $testForm = $("#testForm");
  const testFeedback = $("#testFeedback");
  const $q1 = $("#q1");
  const $q2 = $("#q2");
  const $q3 = $("#q3");

  $testForm.on("submit", function (e) {
    e.preventDefault();

    const respuestas = {
      q1: "c",
      q2: "b",
      q3: "b",
    };
    let score = 0;

    if ($q1.val() === respuestas.q1) {
      score++;
    }

    if ($q2.val() === respuestas.q2) {
      score++;
    }

    if ($q3.val() === respuestas.q3) {
      score++;
    }

    // Mostrar feedback
    let feedback = "";
    let alertType = "";
    if (score === 3) {
      feedback =
        "¡Excelente! Has respondido correctamente todas las preguntas.";
      alertType = "alert-success";
    } else {
      feedback = `Has respondido correctamente ${score} de 3 preguntas. ¡Sigue aprendiendo!`;
      alertType = "alert-warning";
    }
    testFeedback
      .removeClass("d-none alert-success alert-warning")
      .addClass(alertType)
      .text(feedback);
  });

  // Validación formulario
  const $contactForm = $("#contactForm");
  const $inputName = $contactForm.find("#name");
  const $inputEmail = $contactForm.find("#email");
  const $inputMessage = $contactForm.find("#message");
  const $contactFeedback = $("#contactFeedback");

  $contactForm.on("submit", function (e) {
    e.preventDefault();
    console.log("Formulario enviado");
    if (
      !$inputName.val().trim() ||
      !$inputEmail.val().trim() ||
      !$inputMessage.val().trim()
    ) {
      $contactForm.addClass("was-validated");
    } else {
      $contactForm.removeClass("was-validated");
      $contactFeedback
        .removeClass("d-none")
        .addClass("alert-success")
        .text("¡Mensaje enviado correctamente!");
      $contactForm[0].reset();
    }
  });
});
