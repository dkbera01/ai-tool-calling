export const tools = [
    {
        type: "function",
        name: "get_sales_data",
        description: "Get sales data for a give product and time range",
        parameters: {
            type: "object",
            properties: {
                product_name: {
                    type: "string",
                    description: "The name of the product to get sales data for"
                },
                start_date: {
                    type: "string",
                    description: "The start date for the sales data in YYYY-MM-DD format"
                }
            },
            required: ["product_name", "start_date"],
            additionalProperties: false, // controls whether it is allowable for an object to contain additional keys / values that were not defined in the JSON Schema. Must set to false if you want to enforce a strict schema.
        },
        strict: true, // controls whether the model is allowed to call the function with arguments that do not match the JSON Schema defined in parameters. If true, the model must call the function with arguments that match the JSON Schema. If false, the model can call the function with arguments that do not match the JSON Schema.
    },
    {
        type: "function",
        name: "get_inventory_data",
        description: "Get inventory data for a give products",
        parameters: {
            type: "object",
            properties: {
                low_stock_only: {
                    type: "boolean",
                    description: "Whether to only return products with low stock"
                }
            },
            required: ["low_stock_only"],
            additionalProperties: false,
        },
        strict: true,
    },
    {
        type: "function",
        name: "get_products",
        description: "Get a list of products",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false,
        },
        strict: true,
    }

]

export function get_sales_data({ product_name, start_date }) {
    // In a real implementation, this function would query a database or an API to get the sales data for the given product and time range.
    // For this example, we'll just return some dummy data.
    return {
        product_name,
        start_date,
        end_date: "2024-06-30",
        total_sales: 1000,
        total_revenue: 50000
    }
}

export function get_inventory_data({ low_stock_only }) {
    // In a real implementation, this function would query a database or an API to get the inventory data for the given product.
    // For this example, we'll just return some dummy data.
    return {
        product_name: "Product A",
        stock_quantity: low_stock_only ? 5 : 100,
        low_stock: low_stock_only ? true : false
    }
}

export function get_products() {
    // In a real implementation, this function would query a database or an API to get the list of products.
    // For this example, we'll just return some dummy data.
    return [
        { product_name: "Product A", price: 10.99 },
        { product_name: "Product B", price: 15.99 },
        { product_name: "Product C", price: 20.99 }
    ]
}