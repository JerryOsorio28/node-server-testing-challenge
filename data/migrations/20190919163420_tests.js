
exports.up = function(knex) {
    return knex.schema
        .createTable('tests', tbl => {
            tbl.increments(); //auto increment id

            tbl
                .string('name', 20)
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tests')
};
