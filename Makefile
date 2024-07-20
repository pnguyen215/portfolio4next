# Define the directory where the build artifacts will be stored
BUILD_DIR=.next
# Declare targets as phony to avoid conflicts with files of the same name
.PHONY: dev start clean install reinstall build live

# Target to start the development server with hot reloading
dev:
	clear
	pnpm dev
# Target to start the project (default to development mode)
start: dev
# Target to clean the build directory
clean:
	clear
	rm -rf $(BUILD_DIR)
# Target to install project dependencies
install:
	pnpm install
# Target to reinstall project dependencies
reinstall:
	rm -rf node_modules
	pnpm install
# Target to create an optimized production build
build: clean
	pnpm build
# Target to start the production server
live: build
	next start
tree:
	# Create logs directory if not exists
	mkdir -p logs
	# Generate project structure and save it to logs/project_structure.txt
	tree -I "node_modules|.git|.DS_Store" > ./logs/project_structure.txt
