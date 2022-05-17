using Microsoft.EntityFrameworkCore.Migrations;

namespace GoToGre.BackEnd.Migrations
{
    public partial class AddedQuantitySaleItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "SaleItems",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "SaleItems");

        }
    }
}
