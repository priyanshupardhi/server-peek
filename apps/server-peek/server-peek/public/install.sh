#!/bin/bash

install_server_peek() {
    if [ "$(id -u)" != "0" ]; then
        echo "This script must be run as root" >&2
        exit 1
    fi

    # check if is Mac OS
    if [ "$(uname)" = "Darwin" ]; then
        echo "This script must be run on Linux" >&2
        exit 1
    fi

    # check if is running inside a container
    if [ -f /.dockerenv ]; then
        echo "This script must be run on Linux" >&2
        exit 1
    fi

    # # check if something is running on port 80
    # if ss -tulnp | grep ':80 ' >/dev/null; then
    #     echo "Error: something is already running on port 80" >&2
    #     exit 1
    # fi

    # # check if something is running on port 443
    # if ss -tulnp | grep ':443 ' >/dev/null; then
    #     echo "Error: something is already running on port 443" >&2
    #     exit 1
    # fi

    command_exists() {
      command -v "$@" > /dev/null 2>&1
    }

    if command_exists docker; then
      echo "Docker already installed"
    else
      curl -sSL https://get.docker.com | sh
    fi

    docker swarm leave --force 2>/dev/null

    get_ip() {
        # Try to get IPv4
        local ipv4=$(curl -4s https://ifconfig.io 2>/dev/null)

        if [ -n "$ipv4" ]; then
            echo "$ipv4"
        else
            # Try to get IPv6
            local ipv6=$(curl -6s https://ifconfig.io 2>/dev/null)
            if [ -n "$ipv6" ]; then
                echo "$ipv6"
            fi
        fi
    }

    advertise_addr=$(get_ip)

    # Command for installing the service of server-peek

    GREEN="\033[0;32m"
    YELLOW="\033[1;33m"
    BLUE="\033[0;34m"
    NC="\033[0m" # No Color

    format_ip_for_url() {
        local ip="$1"
        if echo "$ip" | grep -q ':'; then
            # IPv6
            echo "[${ip}]"
        else
            # IPv4
            echo "${ip}"
        fi
    }

    formatted_addr=$(format_ip_for_url "$advertise_addr")
    echo ""
    printf "${GREEN}Congratulations, Dokploy is installed!${NC}\n"
    printf "${BLUE}Wait 15 seconds for the server to start${NC}\n"
    printf "${YELLOW}Please go to http://${formatted_addr}:3000${NC}\n\n"
}

# Update server-peek function

# Main script execution
install_server_peek
