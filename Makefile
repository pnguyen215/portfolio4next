# Define the directory where the build artifacts will be stored
BUILD_DIR=.next
# Declare targets as phony to avoid conflicts with files of the same name
.PHONY: dev start clean install reinstall build live tree

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
	rm -rf logs
	rm -rf out
	rm -rf dist
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
live-local: build
	next start
live: clean
	NEXT_PUBLIC_BASE_PATH="" \
	NEXT_PUBLIC_PAGE_EXTENSIONS="js,jsx,ts,tsx,md,mdx" \
	NEXT_PUBLIC_OUTPUT="export" \
	NEXT_PUBLIC_TS_IGNORE_BUILD_ERRORS=true \
	NEXT_PUBLIC_ESLINT_IGNORE_DURING_BUILDS=true \
	NEXT_PUBLIC_REACT_STRICT_MODE=true \
	pnpm build
	npx serve@latest out 
# Create logs directory if not exists
# Generate project structure and save it to logs/project_structure.txt
tree:
	mkdir -p logs
	tree -I "node_modules|.git|.DS_Store" > ./logs/project_structure.txt
