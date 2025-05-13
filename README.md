{
"id": 1, // id da despesa
"paid": false, // se a despesa foi paga
"name": "Celular", // nome da despesa
"date_of_purchase": "2024-07-10", // data da despesa
"updated_at": "2024-07-10", // data da ultima atualizacao
"created_at": "2024-07-10", // data de criacao

// Categoria vai ter um endpoint para poder criar, editar e deletar categorias
"category": "Tecnologia", // categoria da despesa

// enum payment_method
// "CREDIT_CARD", "DEBIT", "PIX", "BOLETO", "MONEY"
"payment_method": "CREDIT_CARD", // forma de pagamento

// se a despesa tiver mais de 1 parcelada deve ter os seguintes campos preenchidos e o is_installment deve ser true
"is_installment": true, // se a despesa é parcelada
"total_installments": 12, // total de parcelas
"current_installment": 1, // parcela atual
"total_amount": 1200, // valor total da despesa
"number_installments_paid": 0, // numero de parcelas pagas
"installment_amount": 100, // valor da parcela

// caso tiver apenas 1 parcela, deve ter os seguintes campos preenchidos e o is_installment deve ser false
"is_installment": false, // se a despesa é parcelada
"total_installments": 1, // total de parcelas
"current_installment": 1, // parcela atual
"total_amount": 1200, // valor total da despesa
"number_installments_paid": null, // numero de parcelas pagas
"installment_amount": 1200, // valor da parcela

// caso o payment_method seja "DEBIT", "PIX", "BOLETO", "MONEY" deve ter os seguintes campos de installment preenchidos
"payment_method": "DEBIT", // forma de pagamento
"is_installment": false, // se a despesa é parcelada
"total_installments": null, // total de parcelas
"current_installment": null, // parcela atual
"total_amount": 1200, // valor total da despesa
"number_installments_paid": null, // numero de parcelas pagas
"installment_amount": null,
}
