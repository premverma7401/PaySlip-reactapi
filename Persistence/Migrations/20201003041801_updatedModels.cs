using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class updatedModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReportingManager",
                table: "Employees",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ContractType",
                table: "EmployeeContract",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReportingManager",
                table: "Employees");

            migrationBuilder.AlterColumn<int>(
                name: "ContractType",
                table: "EmployeeContract",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
